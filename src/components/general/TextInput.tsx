import styled from '@emotion/styled'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Dispatch, SetStateAction, forwardRef, useRef, useState } from 'react'
import { useTheme } from '../../styles/ThemeProvider'

interface TextInputProps {
  placeholder: string
  type: 'text' | 'password' | 'email'
  onChange: Dispatch<SetStateAction<string>>
}

const Container = styled.div({
  position: 'relative',
  display: 'flex',
  width: '100%',
  margin: '5px 0',
  span: {
    whiteSpace: 'nowrap',
    display: 'block',
    borderRadius: '6px 0 0 6px',
  },
  input: {
    whiteSpace: 'nowrap',
    display: 'block',
    borderRadius: '0 6px 6px 0',
  },
})

const Label = styled.span({
  textAlign: 'center',
  padding: '8px 16px',
  fontSize: 14,
  lineHeight: '25px',
  border: '1px solid',
})

const Input = styled.input({
  display: 'block',
  width: '100%',
  padding: '8px 16px',
  lineHeight: '25px',
  fontSize: 14,
  fontWeight: 500,
  fontFamily: '"Open Sans", sans-serif',
  borderRadius: 6,
  appearance: 'none',
  border: '1px solid',
  position: 'relative',
  zIndex: 1,
  flex: '1 1 auto',
  marginTop: 0,
  marginBottom: 0,
})

const TextInput = forwardRef<HTMLDivElement, TextInputProps>(
  ({ placeholder, onChange, type, ...other }, ref) => {
    const [thisValue, setThisValue] = useState<string>('')
    const LabelRef = useRef<HTMLSpanElement>(null)
    const InputRef = useRef<HTMLInputElement>(null)
    const theme = useTheme()

    useGSAP(() => {
      gsap.to([InputRef.current], {
        borderColor: theme.colors.grey.main + '44',
        duration: 0,
      })
      gsap.to([LabelRef.current], {
        borderColor: theme.colors.grey.main + '44',
        backgroundColor: theme.colors.grey.light + '33',
        duration: 0,
      })
    })

    const handleChange = (newValue: string) => {
      setThisValue(newValue)
      onChange(newValue)
    }

    const focusAnimation = () => {
      gsap.to([LabelRef.current], {
        color: theme.colors.primary.text,
        backgroundColor: theme.colors.primary.main,
        borderColor: theme.colors.primary.main,
        duration: 0.3,
        ease: 'power1.inOut',
      })
      gsap.to([InputRef.current], {
        borderColor: theme.colors.primary.main,
        duration: 0.3,
        ease: 'power1.inOut',
      })
    }
    const blurAnimation = () => {
      gsap.to([LabelRef.current], {
        color: theme.colors.common.text,
        backgroundColor: theme.colors.grey.light + '33',
        borderColor: theme.colors.grey.main + '44',
        duration: 0.3,
        ease: 'power1.inOut',
      })
      gsap.to([InputRef.current], {
        borderColor: theme.colors.grey.main + '44',
        duration: 0.3,
        ease: 'power1.inOut',
      })
    }

    return (
      <Container ref={ref}>
        <Label ref={LabelRef}>{placeholder}</Label>
        <Input
          ref={InputRef}
          type={type}
          onFocus={focusAnimation}
          onBlur={blurAnimation}
          placeholder={placeholder}
          autoComplete='new-password'
          value={thisValue}
          {...other}
          onChange={(e) => handleChange(e.target.value)}
        />
      </Container>
    )
  }
)

export default TextInput
