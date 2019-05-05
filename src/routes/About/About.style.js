const background = '#444'
const radius = 5
const border = '1px solid #999'

export const style = {
  about: {
    padding: 10,
    paddingBottom: 15,
    lineHeight: 1.5
  },
  button: {
    height: 30,
    color: '#eee',
    fontSize: '0.93em',
    borderRadius: radius,
    background,
    flexGrow: 4,
    border,
    '&:hover': {
      background: '#555',
      cursor: 'pointer',
    }
  },
  top: {
    marginTop: 0,
  },
  heading: {
    marginBottom: 0
  },
  link: {
    textDecoration: 'underline',
    cursor: 'pointer'
  }
}
