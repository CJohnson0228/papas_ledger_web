import styled from '@emotion/styled'
import { FaFacebookF } from 'react-icons/fa'

const Button = styled.button({
  display: 'flex',
  width: '100%',
  margin: '5px 0',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
  borderRadius: 10,
  textAlign: 'center',
  backgroundColor: '#4267b2',
  color: '#ffffff',
  transition: 'background-color 0.2s ease',
  svg: {
    marginRight: 10,
  },
  '&:hover': {
    backgroundColor: '#375695',
  },
})

const FacebookButton = (props: { onClick: () => void }) => {
  return (
    <Button onClick={props.onClick}>
      <FaFacebookF />
      Login with Facebook
    </Button>
  )
}

export default FacebookButton
