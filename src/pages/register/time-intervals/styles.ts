import { Box, styled, Text, TextInput } from '@mujapira-ui/react'

export const IntervalBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
})

export const IntervalContainer = styled('div', {
  border: '1px solid $gray600',
  borderRadius: '$md',
  marginBottom: '$4',
})

export const IntervalItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$3 $4',

  '& + &': {
    borderTop: '1px solid $gray600',
  },
})

export const IntervalDay = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
})

export const IntervalInputs = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  position: 'relative',

  'input::-webkit-calendar-picker-indicator': {
    display: 'none',
  },
  '>div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: '$3',

    backgroundColor: '$gray900',
    borderRadius: '$sm',
    border: '2px solid transparent',
    borderColor: '$gray900',

    'svg.disabled': {
      opacity: '0.5',
    },
    '> div': {
      paddingRight: '0',
    },
  },
})

export const FormError = styled(Text, {
  color: '#f75a68',
  marginBottom: '$4',
})

export const CustomTextInput = styled(TextInput, {
  padding: '0rem',
  '&:disabled': {
    opacity: '.5',
  },
})
