import { OrbitingCircles } from "./OrbitingCircles";
import { useCallback, useEffect, useRef, useState } from "react";

const SKILLS = [
  "React",
  "JavaScript",
  "nodejs",
  "Html5",
  "Kotlin",
  "Firebase",
  "Azure",
  "GitHub",
  "Gitlab",
  "Google",
  "Magento",
  "hyva",
  "xml",
  "Figma",
  "Adobe-Illustrator",
  "Adobe-Indesign",
];

export function Frameworks() {
  const [isInteracting, setIsInteracting] = useState(false);
  const containerRef = useRef(null);
  // Rotations (degrees)
  const [outerRot, setOuterRot] = useState(0);
  const [innerRot, setInnerRot] = useState(0);
  // Inertia (deg per second)
  const outerSpeedRef = useRef(0);
  const innerSpeedRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const activeRingRef = useRef(null); // 'outer' | 'inner' | null
  const lastAngleRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafRef = useRef(0);
  // Touch gesture tracking (swipe-style)
  const isTouchModeRef = useRef(false);
  const touchStartAngleRef = useRef(0);
  const touchStartTimeRef = useRef(0);
  const lastTouchAngleRef = useRef(0);
  const lastTouchTimeRef = useRef(0);
  const prevTouchAngleRef = useRef(0);
  const prevTouchTimeRef = useRef(0);
  const touchVelocityRef = useRef(0);
  // RAF-throttled live updates for touch move
  const touchAccumRef = useRef(0);
  const touchRafIdRef = useRef(0);
  const touchFramePendingRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  // Ring settings (match previous defaults):
  const OUTER_RADIUS = 160;
  const INNER_RADIUS = 100;
  // Make skill rings even slower than Globe: 0.0018 rad/frame
  const DEG_PER_FRAME = 0.0018 * (180 / Math.PI);

  // Animation loop: auto-rotate + inertia decay
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting || entry.intersectionRatio > 0.05);
      },
      { threshold: [0, 0.1, 0.25], rootMargin: "120px 0px 120px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible && rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) {
      return;
    }
    if (!isInteracting && !isDragging && outerSpeedRef.current === 0 && innerSpeedRef.current === 0) {
      // still need auto rotation
    }
    let last = performance.now();
    const tick = (now) => {
      const dt = Math.max(0, now - last) / 1000; // seconds
      last = now;
      // Auto-rotation per frame to match Globe exactly; momentum uses time-based integration
      setOuterRot((r) => r + DEG_PER_FRAME + outerSpeedRef.current * dt);
      setInnerRot((r) => r - DEG_PER_FRAME + innerSpeedRef.current * dt);
      // Inertia decay
      if (!isDragging) {
        outerSpeedRef.current *= 0.92;
        innerSpeedRef.current *= 0.92;
        if (Math.abs(outerSpeedRef.current) < 0.01) outerSpeedRef.current = 0;
        if (Math.abs(innerSpeedRef.current) < 0.01) innerSpeedRef.current = 0;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isDragging, isInteracting, isVisible]);

  const getCenter = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return null;
    return { cx: rect.left + rect.width / 2, cy: rect.top + rect.height / 2 };
  };

  const pickRing = (x, y) => {
    const c = getCenter();
    if (!c) return 'inner';
    const dx = x - c.cx;
    const dy = y - c.cy;
    const dist = Math.hypot(dx, dy);
    const outerDiff = Math.abs(dist - OUTER_RADIUS);
    const innerDiff = Math.abs(dist - INNER_RADIUS);
    return outerDiff < innerDiff ? 'outer' : 'inner';
  };

  const angleAt = (x, y) => {
    const c = getCenter();
    if (!c) return 0;
    return Math.atan2(y - c.cy, x - c.cx) * (180 / Math.PI);
  };

  const onPointerDown = useCallback((clientX, clientY) => {
    setIsDragging(true);
    activeRingRef.current = pickRing(clientX, clientY);
    outerSpeedRef.current = 0;
    innerSpeedRef.current = 0;
    lastAngleRef.current = angleAt(clientX, clientY);
    lastTimeRef.current = performance.now();
  }, []);

  const onPointerMove = useCallback((clientX, clientY) => {
    if (!isDragging) return;
    const ang = angleAt(clientX, clientY);
    let delta = ang - lastAngleRef.current;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    const now = performance.now();
    const dt = Math.max(1, now - lastTimeRef.current) / 1000; // seconds
    const instSpeed = delta / dt; // deg/s

    if (activeRingRef.current === 'outer') {
      setOuterRot((r) => r + delta);
      outerSpeedRef.current = instSpeed;
    } else {
      setInnerRot((r) => r + delta);
      innerSpeedRef.current = instSpeed;
    }
    lastAngleRef.current = ang;
    lastTimeRef.current = now;
  }, [isDragging]);

  const onPointerUp = useCallback(() => {
    setIsDragging(false);
    activeRingRef.current = null;
  }, []);

  // Touch-specific handlers: swipe to set momentum, minimal updates during move
  const onTouchStartHandler = useCallback((e) => {
    if (!e.touches || e.touches.length === 0) return;
    const t = e.touches[0];
    isTouchModeRef.current = true;
    setIsInteracting(true);
    setIsDragging(true);
    activeRingRef.current = pickRing(t.clientX, t.clientY);
    const ang = angleAt(t.clientX, t.clientY);
    touchStartAngleRef.current = ang;
    touchStartTimeRef.current = performance.now();
    lastTouchAngleRef.current = ang;
    lastTouchTimeRef.current = touchStartTimeRef.current;
    prevTouchAngleRef.current = ang;
    prevTouchTimeRef.current = touchStartTimeRef.current;
    touchVelocityRef.current = 0;
    touchAccumRef.current = 0;
    if (touchRafIdRef.current) cancelAnimationFrame(touchRafIdRef.current);
    touchFramePendingRef.current = false;
    // reset speeds
    outerSpeedRef.current = 0;
    innerSpeedRef.current = 0;
  }, []);

  const onTouchMoveHandler = useCallback((e) => {
    if (!e.touches || e.touches.length === 0) return;
    const t = e.touches[0];
    const now = performance.now();
    const ang = angleAt(t.clientX, t.clientY);
    // compute instantaneous segment velocity
    let segDelta = ang - prevTouchAngleRef.current;
    if (segDelta > 180) segDelta -= 360;
    if (segDelta < -180) segDelta += 360;
    const segDt = Math.max(1, now - prevTouchTimeRef.current) / 1000;
    touchVelocityRef.current = segDelta / segDt; // deg/s
    // update refs
    prevTouchAngleRef.current = ang;
    prevTouchTimeRef.current = now;
    lastTouchAngleRef.current = ang;
    lastTouchTimeRef.current = now;
    // RAF-throttle state updates for smooth visual feedback
    touchAccumRef.current += segDelta;
    if (!touchFramePendingRef.current) {
      touchFramePendingRef.current = true;
      touchRafIdRef.current = requestAnimationFrame(() => {
        const d = touchAccumRef.current;
        touchAccumRef.current = 0;
        touchFramePendingRef.current = false;
        if (activeRingRef.current === 'outer') {
          setOuterRot((r) => r + d);
        } else if (activeRingRef.current === 'inner') {
          setInnerRot((r) => r + d);
        }
      });
    }
  }, []);

  const onTouchEndHandler = useCallback(() => {
    // Flush any pending frame
    if (touchFramePendingRef.current && touchRafIdRef.current) {
      cancelAnimationFrame(touchRafIdRef.current);
      const d = touchAccumRef.current;
      touchAccumRef.current = 0;
      touchFramePendingRef.current = false;
      if (d !== 0) {
        if (activeRingRef.current === 'outer') setOuterRot((r) => r + d);
        else if (activeRingRef.current === 'inner') setInnerRot((r) => r + d);
      }
    }
    // Use last instantaneous velocity, clamp and scale for control
    const MAX_SPEED = 120; // deg/s cap
    const SPEED_SCALE = 0.6; // reduce aggressiveness
    let instSpeed = touchVelocityRef.current;
    if (Math.abs(instSpeed) < 15) instSpeed = 0; // tiny flicks -> no inertia
    if (instSpeed > MAX_SPEED) instSpeed = MAX_SPEED;
    if (instSpeed < -MAX_SPEED) instSpeed = -MAX_SPEED;
    instSpeed *= SPEED_SCALE;
    if (activeRingRef.current === 'outer') {
      outerSpeedRef.current = instSpeed;
    } else if (activeRingRef.current === 'inner') {
      innerSpeedRef.current = instSpeed;
    }
    setIsDragging(false);
    setIsInteracting(false);
    activeRingRef.current = null;
    isTouchModeRef.current = false;
  }, []);
  return (
    <div
      ref={containerRef}
      className="relative flex h-[15rem] w-full flex-col items-center justify-center cursor-grab active:cursor-grabbing"
      style={{ touchAction: 'none' }}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => { setIsInteracting(false); onPointerUp(); }}
      onMouseDown={(e) => onPointerDown(e.clientX, e.clientY)}
      onMouseMove={(e) => onPointerMove(e.clientX, e.clientY)}
      onMouseUp={onPointerUp}
      
      onTouchStart={onTouchStartHandler}
      onTouchMove={onTouchMoveHandler}
      onTouchEnd={onTouchEndHandler}
    >
      {/* HIDE THE BIG RING BELOW 512PX, DO NOT BREAK POSITIONING */}
      <div className="contents [@media_(max-width:512px)]:hidden">
        <OrbitingCircles iconSize={40} radius={OUTER_RADIUS} rotation={outerRot}>
          {SKILLS.map((skill, index) => (
            <Icon key={index} src={`/assets/logos/${skill}.svg`} />
          ))}
        </OrbitingCircles>
      </div>
      <OrbitingCircles iconSize={25} radius={INNER_RADIUS} rotation={innerRot}>
        {SKILLS.slice().reverse().map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);