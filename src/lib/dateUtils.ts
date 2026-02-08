import { isAfter, isSameDay, parseISO } from 'date-fns';

export function isDayUnlocked(targetDateStr: string): boolean {
    // For development/testing, you might want to override this
    // But for production:
    const targetDate = parseISO(targetDateStr);
    const now = new Date();

    // Unlock if it's the same day or after
    return isAfter(now, targetDate) || isSameDay(now, targetDate);
}

export function getTimeUntilUnlock(targetDateStr: string) {
    const targetDate = parseISO(targetDateStr);
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) return null;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
}
