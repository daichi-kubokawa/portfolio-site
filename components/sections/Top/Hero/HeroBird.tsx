"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

import styles from "./HeroBird.module.css";

type BirdStatus = "hidden" | "appearing" | "idle" | "diving" | "flying";

type BirdPosition = {
  x: number;
  y: number;
};

type BirdFlight = {
  x: number;
  y: number;
  spin: number;
};

type BirdStyle = CSSProperties & {
  "--fly-x": string;
  "--fly-y": string;
  "--fly-spin": string;
};

const APPEAR_DURATION = 700;
const IDLE_DURATION = 5000;
const DIVE_DURATION = 650;
const FLY_DURATION = 2600;

const RESPAWN_DELAY_MIN = 3000;
const RESPAWN_DELAY_MAX = 5000;

const INITIAL_POSITION: BirdPosition = {
  x: 86,
  y: 30,
};

const INITIAL_FLIGHT: BirdFlight = {
  x: 100,
  y: -100,
  spin: 3600,
};

/**
 * 中央のタイトルとHero上部を避けた出現候補。
 * x・yは親要素を基準にしたパーセント。
 */
const DESKTOP_POSITIONS: readonly BirdPosition[] = [
  { x: 8, y: 30 },
  { x: 24, y: 26 },
  { x: 50, y: 24 },
  { x: 76, y: 26 },
  { x: 92, y: 30 },

  { x: 7, y: 48 },
  { x: 93, y: 48 },

  { x: 8, y: 68 },
  { x: 92, y: 68 },

  { x: 14, y: 86 },
  { x: 34, y: 90 },
  { x: 66, y: 90 },
  { x: 86, y: 86 },
];

const TABLET_POSITIONS: readonly BirdPosition[] = [
  { x: 8, y: 30 },
  { x: 28, y: 26 },
  { x: 50, y: 24 },
  { x: 72, y: 26 },
  { x: 92, y: 30 },

  { x: 7, y: 48 },
  { x: 93, y: 48 },

  { x: 8, y: 70 },
  { x: 92, y: 70 },

  { x: 18, y: 88 },
  { x: 50, y: 92 },
  { x: 82, y: 88 },
];

const MOBILE_POSITIONS: readonly BirdPosition[] = [
  { x: 8, y: 32 },
  { x: 30, y: 27 },
  { x: 70, y: 27 },
  { x: 92, y: 32 },

  { x: 7, y: 50 },
  { x: 93, y: 50 },

  { x: 7, y: 70 },
  { x: 93, y: 70 },

  { x: 14, y: 87 },
  { x: 50, y: 91 },
  { x: 86, y: 87 },
];

const STATUS_CLASS_NAMES: Record<BirdStatus, string> = {
  hidden: styles.hidden,
  appearing: styles.appearing,
  idle: styles.idle,
  diving: styles.diving,
  flying: styles.flying,
};

function getRandomItem<T>(items: readonly T[]): T {
  const item = items[Math.floor(Math.random() * items.length)];

  if (item === undefined) {
    throw new Error("ランダム選択する候補が設定されていません。");
  }

  return item;
}

function getPositionCandidates(): readonly BirdPosition[] {
  if (window.innerWidth < 768) {
    return MOBILE_POSITIONS;
  }

  if (window.innerWidth < 1024) {
    return TABLET_POSITIONS;
  }

  return DESKTOP_POSITIONS;
}

function getRandomPosition(currentPosition?: BirdPosition): BirdPosition {
  const positions = getPositionCandidates();

  if (!currentPosition) {
    return getRandomItem(positions);
  }

  const availablePositions = positions.filter(
    (position) =>
      position.x !== currentPosition.x || position.y !== currentPosition.y,
  );

  return getRandomItem(
    availablePositions.length > 0 ? availablePositions : positions,
  );
}

function getRandomFlight(): BirdFlight {
  /**
   * CSSではYのマイナス方向が上。
   * -170度〜-10度に制限し、下方向へ飛ばないようにする。
   */
  const minimumAngle = -170;
  const maximumAngle = -10;

  const angleInDegrees =
    minimumAngle + Math.random() * (maximumAngle - minimumAngle);

  const angleInRadians = angleInDegrees * (Math.PI / 180);
  const distance = 145 + Math.random() * 35;

  const rotations = 10 + Math.floor(Math.random() * 7);
  const rotationDirection = Math.random() < 0.5 ? -1 : 1;

  return {
    x: Math.cos(angleInRadians) * distance,
    y: Math.sin(angleInRadians) * distance,
    spin: rotations * 360 * rotationDirection,
  };
}

function getRespawnDelay(): number {
  return (
    RESPAWN_DELAY_MIN + Math.random() * (RESPAWN_DELAY_MAX - RESPAWN_DELAY_MIN)
  );
}

export default function HeroBird() {
  const [status, setStatus] = useState<BirdStatus>("hidden");
  const [position, setPosition] = useState<BirdPosition>(INITIAL_POSITION);
  const [flight, setFlight] = useState<BirdFlight>(INITIAL_FLIGHT);

  const positionRef = useRef<BirdPosition>(INITIAL_POSITION);
  const shouldRespawnRef = useRef(false);

  /**
   * 初回表示。
   * requestAnimationFrame内で更新し、
   * Effect本体で同期的にsetStateしない。
   */
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const initialPosition = getRandomPosition();

      positionRef.current = initialPosition;
      setPosition(initialPosition);
      setStatus("appearing");
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  /**
   * 鳥の状態遷移を管理する。
   */
  useEffect(() => {
    let timerId: number | undefined;

    switch (status) {
      case "appearing": {
        timerId = window.setTimeout(() => {
          setStatus("idle");
        }, APPEAR_DURATION);

        break;
      }

      case "idle": {
        timerId = window.setTimeout(() => {
          setStatus("diving");
        }, IDLE_DURATION);

        break;
      }

      case "diving": {
        timerId = window.setTimeout(() => {
          const nextPosition = getRandomPosition(positionRef.current);

          positionRef.current = nextPosition;
          setPosition(nextPosition);
          setStatus("appearing");
        }, DIVE_DURATION);

        break;
      }

      case "flying": {
        timerId = window.setTimeout(() => {
          shouldRespawnRef.current = true;
          setStatus("hidden");
        }, FLY_DURATION);

        break;
      }

      case "hidden": {
        if (!shouldRespawnRef.current) {
          break;
        }

        timerId = window.setTimeout(() => {
          const nextPosition = getRandomPosition(positionRef.current);

          shouldRespawnRef.current = false;
          positionRef.current = nextPosition;

          setPosition(nextPosition);
          setStatus("appearing");
        }, getRespawnDelay());

        break;
      }
    }

    return () => {
      if (timerId !== undefined) {
        window.clearTimeout(timerId);
      }
    };
  }, [status]);

  const handleIconClick = () => {
    if (status !== "idle") {
      return;
    }

    setFlight(getRandomFlight());
    setStatus("flying");
  };

  const birdStyle: BirdStyle = {
    left: `${position.x}%`,
    top: `${position.y}%`,
    "--fly-x": `${flight.x}vw`,
    "--fly-y": `${flight.y}vh`,
    "--fly-spin": `${flight.spin}deg`,
  };

  return (
    <button
      type="button"
      className={`${styles.iconButton} ${STATUS_CLASS_NAMES[status]}`}
      style={birdStyle}
      onClick={handleIconClick}
      aria-label="鳥のアイコンを飛ばす"
      tabIndex={status === "idle" ? 0 : -1}
    >
      <span className={styles.iconFrame}>
        <Image
          src="/icon.png"
          alt=""
          width={120}
          height={120}
          className={styles.icon}
          priority
          draggable={false}
        />
      </span>
    </button>
  );
}
