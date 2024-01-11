export function trimmed(string: string): string {
    return string.length > 50 ? string.slice(0, 50) + "..." : string;
}
