import styled from '@emotion/styled'
import { FaXTwitter } from 'react-icons/fa6'

const Button = styled.button({
  display: 'flex',
  width: '100%',
  margin: '5px 0',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
  borderRadius: 10,
  textAlign: 'center',
  backgroundColor: '#000000',
  color: '#ffffff',
  transition: 'background-color 0.2s ease',
  svg: {
    marginRight: 10,
  },
  '&:hover': {
    backgroundColor: '#222222',
  },
})

const XButton = (props: { onClick: () => void }) => {
  return (
    <Button onClick={props.onClick}>
      <FaXTwitter />
      Login with X
    </Button>
  )
}

export default XButton
