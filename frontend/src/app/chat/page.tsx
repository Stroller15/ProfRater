'use client'
import { Box, Button, Stack, TextField, useMediaQuery } from '@mui/material'
import { useState } from 'react'

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hi! I'm the Rate My Professor support assistant. How can I help you today?`,
    },
  ])
  const [message, setMessage] = useState('')
  const isSmallScreen = useMediaQuery('(max-width:600px)') // Responsive hook for small screens

  const sendMessage = async () => {
    if (!message.trim()) return // Prevent sending an empty message

    setMessage('')
    setMessages((messages: any) => [
      ...messages,
      { role: 'user', content: message },
      { role: 'assistant', content: '' },
    ])

    fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([...messages, { role: 'user', content: message }]),
    }).then(async (res: any) => {
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let result = ''

      return reader.read().then(function processText({ done, value }: any): any {
        if (done) {
          return result
        }
        const text = decoder.decode(value || new Uint8Array(), { stream: true })
        setMessages((messages: any) => {
          let lastMessage = messages[messages.length - 1]
          let otherMessages = messages.slice(0, messages.length - 1)
          return [
            ...otherMessages,
            { ...lastMessage, content: lastMessage.content + text },
          ]
        })
        return reader.read().then(processText)
      })
    })
  }

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction={'column'}
        width={isSmallScreen ? '90vw' : '500px'} // Responsive width for smaller screens
        height={isSmallScreen ? '80vh' : '900px'} // Responsive height for smaller screens
        border="1px solid black"
        p={2}
        spacing={3}
        bgcolor="white" // Set chat background to white
      >
        <Stack
          direction={'column'}
          spacing={2}
          flexGrow={1}
          overflow="auto"
          maxHeight="100%"
        >
          {messages.map((message: any, index: any) => (
            <Box
              key={index}
              display="flex"
              justifyContent={
                message.role === 'assistant' ? 'flex-start' : 'flex-end'
              }
            >
              <Box
                bgcolor="white" // Set message background to white
                color="black" // Set text color to black
                borderRadius={16}
                p={3}
                border={1} // Add border for better visual distinction
                borderColor={
                  message.role === 'assistant' ? 'primary.main' : 'secondary.main'
                }
              >
                {message.content}
              </Box>
            </Box>
          ))}
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <TextField
            label="Message"
            fullWidth
            value={message}
            onChange={(e: any) => setMessage(e.target.value)}
            required // Make the input field required
          />
          <Button
            variant="contained"
            onClick={sendMessage}
            sx={{ 
              bgcolor: 'black !important',  // Ensure the background is black
              color: 'white !important', // Ensure the text is white
              '&:hover': {
                bgcolor: '#333 !important',  // Change background to dark gray on hover
                color: 'white !important',   // Keep text color white on hover
              },
            }}
          >
            Send
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
