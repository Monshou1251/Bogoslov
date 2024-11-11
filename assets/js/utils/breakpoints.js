const devices = {
    xs: 0,
	sm: 480,
	md: 768,
	lg: 1280,
	xl: 1601
};

const isDesktop = () => window.matchMedia(`(min-width: ${devices.lg}px)`).matches;
const isMob = () => window.matchMedia(`(max-width: ${devices.md - 1}px)`).matches;
const isTablet = () => window.matchMedia(`(min-width: ${devices.md}px) and (max-width: ${devices.lg - 1}px)`).matches;

export {devices, isDesktop, isMob, isTablet};