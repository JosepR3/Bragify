import { useCallback, useRef, useEffect } from "react";

export default function useTimer() {
    const timer = useRef(null);

    const runTimer = useCallback((cb = () => { }, time = 1000) => {
        if (timer.current) clearTimeout(timer.current);

        timer.current = setTimeout(cb, time);
    }, []);

    const cancelTimer = useCallback(() => {
        if (timer.current) clearTimeout(timer.current);

        timer.current = null;
    }, []);

    useEffect(() => {
        return cancelTimer;
    }, [cancelTimer]);

    return {
        runTimer,
        cancelTimer,
        status: timer.current === null ? "idle" : "running",
    };
}