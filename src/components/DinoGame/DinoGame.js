"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const DinoGame = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const gameRef = useRef(null);
  const dinoRef = useRef(null);
  const obstacleRef = useRef(null);
  const animationFrameRef = useRef(null);

  const jump = () => {
    if (dinoRef.current && !dinoRef.current.classList.contains("jump")) {
      dinoRef.current.classList.add("jump");
      setTimeout(() => {
        if (dinoRef.current) {
          dinoRef.current.classList.remove("jump");
        }
      }, 500);
    }
  };

  const handleStart = () => {
    setIsPlaying(true);
    setScore(0);
    setIsGameOver(false);
  };

  const checkCollision = () => {
    if (!dinoRef.current || !obstacleRef.current) return;

    const dinoRect = dinoRef.current.getBoundingClientRect();
    const obstacleRect = obstacleRef.current.getBoundingClientRect();

    const collision =
      dinoRect.right > obstacleRect.left &&
      dinoRect.left < obstacleRect.right &&
      dinoRect.bottom > obstacleRect.top;

    if (collision) {
      setIsGameOver(true);
      setIsPlaying(false);
    } else {
      setScore((prev) => prev + 1);
      animationFrameRef.current = requestAnimationFrame(checkCollision);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if ((e.code === "Space" || e.key === "ArrowUp") && isPlaying) {
        e.preventDefault();
        jump();
      }
    };

    const handleTouch = (e) => {
      if (isPlaying) {
        e.preventDefault();
        jump();
      }
    };

    if (isPlaying) {
      window.addEventListener("keydown", handleKeyPress);
      window.addEventListener("touchstart", handleTouch);
      animationFrameRef.current = requestAnimationFrame(checkCollision);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("touchstart", handleTouch);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <div className="footer-game-section">
      <div className="footer-message">
        <h3>Still scrolling? Take a break!</h3>
        <p>
          While you're here, help this little dinosaur survive the apocalypse 🦖
        </p>
        <p className="game-instructions">
          Press <span className="key">Space</span> or{" "}
          <span className="key">↑</span> to jump
          <br />
          <span className="mobile-instruction">(Tap screen on mobile)</span>
        </p>
      </div>
      <div className="dino-game-container">
        <div className="game-info">
          <p className="score">Score: {score}</p>
          {!isPlaying && (
            <motion.button
              className="start-btn"
              onClick={handleStart}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isGameOver ? "Try Again" : "Start Game"}
            </motion.button>
          )}
        </div>
        <div ref={gameRef} className="game">
          <div ref={dinoRef} className="dino">
            <img src="/assets/images/dino.svg" alt="T-Rex" />
          </div>
          {isPlaying && <div ref={obstacleRef} className="obstacle"></div>}
        </div>
      </div>
      <div className="footer-credits">
        <p>Made with 💻 by Sagar • Thanks for visiting!</p>
        <p className="easter-egg">You found the secret game! 🎮</p>
      </div>
    </div>
  );
};

export default DinoGame;
