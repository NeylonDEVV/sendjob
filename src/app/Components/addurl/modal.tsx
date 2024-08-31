'use client'

import { useState } from 'react'
import { Button, Dialog, Flex } from '@radix-ui/themes'

export default function AddUrl() {
  const [emails, setEmails] = useState<string[]>([])
  const [newEmail, setNewEmail] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleAddEmail = async () => {
    try {
      const response = await fetch('/api/addEmpresa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newEmail }),
      });

      if (response.ok) {
        const empresa = await response.json();
        setEmails([...emails, empresa.email]);
        setNewEmail('');
        setIsOpen(false);
      } else {
        console.error('Failed to add email');
      }
    } catch (error) {
      console.error('Erro ao adicionar empresa:', error);
    }
  };


  return (
    <div>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger>
          <button className="w-full mt-3 rounded-lg border-2 bg-blue-600 p-4 text-white font-bold hover:bg-blue-700 transition-colors">
            Cadastrar nova empresa
          </button>
        </Dialog.Trigger>

        <Dialog.Content
          maxWidth="370px"
          className="bg-gray-800 shadow-md shadow-blue-500 text-white flex-col outline-none border-none fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg p-6"
          style={{ border: 'none', outline: 'none' }}
        >
          <Flex direction="column" gap="3" justify="center" align="center">
            <Dialog.Title className="text-white text-lg">
              Cadastre uma nova empresa (email)
            </Dialog.Title>
          </Flex>

          <Flex direction="column" gap="4">
            <input
              type="text"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Email da empresa"
              className="w-full rounded-lg mb-4 bg-[#292929] mt-4 text-sm px-4 py-3 font-bold text-[#c4c4c4]"
            />
          </Flex>

          <Flex gap="3" mt="4" justify="center">
            <Button
              className="w-full py-2 bg-[#00ff2a] text-black font-bold text-md rounded-full transform hover:bg-green-600"
              onClick={handleAddEmail}
            >
              Cadastrar empresa
            </Button>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}
