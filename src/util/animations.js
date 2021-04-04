//GSAP animations

export const footerSocialHover = (target, data) => ({
  border: "1px solid #ddd",
  borderRadius: '20px',
  boxShadow: '3px 3px 20px #000',
  width: '100%',
  duration: 0.3
});

export const footerSocialUnhover = (target, data) => ({
  border: "none",
  borderRadius: '0',
  boxShadow: 'none',
  duration: 0.3,
  width: '10%'
});

export const dropdownIn = () => ({
  opacity: 1,
  y: -20,
  zIndex: 2000
})
export const dropdownOut = () => ({
  opacity: 0,
  y: 20,
  zIndex: -1
})