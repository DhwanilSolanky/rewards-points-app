import { calculateRewardPoints } from "./utils/calculateRewards";

describe('calculateRewardPoints', () => {
    // Positive test cases
    it('should return 0 points for amount <= 50', () => {
        expect(calculateRewardPoints(30)).toBe(0);
        expect(calculateRewardPoints(50)).toBe(0);
    });

    it('should return correct points for amount > 50 and <= 100', () => {
        expect(calculateRewardPoints(60)).toBe(10); // 60 - 50 = 10
        expect(calculateRewardPoints(75)).toBe(25);
    });

    it('should return correct points for amount > 100', () => {
        expect(calculateRewardPoints(120)).toBe(90); // (20 * 2) + 50
        expect(calculateRewardPoints(150)).toBe(150); // (50 * 2) + 50
    });

    it('should return correct points for fractional amounts', () => {
        expect(calculateRewardPoints(120.75)).toBe(91); // (20.75 * 2) + 50
        expect(calculateRewardPoints(99.5)).toBe(49); // 49.5
    });

    // Negative test cases
    it('should return 0 for negative or zero amounts', () => {
        expect(calculateRewardPoints(0)).toBe(0);
        expect(calculateRewardPoints(-10)).toBe(0);
    });

    it('should return 0 for non-numeric input (NaN)', () => {
        expect(calculateRewardPoints(NaN)).toBe(0);
    });

    it('should return 0 if amount is undefined or null', () => {
        expect(calculateRewardPoints(undefined)).toBe(0);
        expect(calculateRewardPoints(null)).toBe(0);
    });

    it('should return 0 for non-number types', () => {
        expect(calculateRewardPoints("100")).toBe(0); // because it's a string
        expect(calculateRewardPoints({})).toBe(0);
        expect(calculateRewardPoints([])).toBe(0);
    });
});