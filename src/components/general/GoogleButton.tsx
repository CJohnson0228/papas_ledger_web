import styled from '@emotion/styled'
import { FaGoogle } from 'react-icons/fa'

const Button = styled.button({
  display: 'flex',
  width: '100%',
  margin: '5px 0',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
  borderRadius: 10,
  textAlign: 'center',
  backgroundColor: '#db4437',
  color: '#ffffff',
  transition: 'background-color 0.2s ease',
  svg: {
    marginRight: 10,
  },
  '&:hover': {
    backgroundColor: '#BE3023',
  },
})

const GoogleButton = (props: { onClick: () => void }) => {
  return (
    <Button onClick={props.onClick}>
      <FaGoogle />
      Login with Google
    </Button>
  )
}

export default GoogleButton
