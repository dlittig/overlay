const background = '#444';
const radius = 5;
const border = '1px solid #999';

/* eslint-disable import/prefer-default-export */
export const style = {
  button: {
    height: 35,
    color: '#eee',
    fontSize: '0.93em',
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius,
    background,
    flexGrow: 4,
    border,
    '&:hover': {
      background: '#555',
      cursor: 'pointer',
    },
  },
};
