import { Plus } from 'lucide-react'
import { useChatState } from '../../state/chat-context'
import { useSettingsState } from '../../state/settings-context'
import { ChatInput } from './ChatInput'
import { MessageList } from './MessageList'
import './chat.css'

export function ChatView() {
  const { messages } = useChatState()
  const { settings } = useSettingsState()

  // Placeholder for chat history
  const history = [
    { id: '1', title: 'Explaining Quantum Physics' },
    { id: '2', title: 'Refactoring React Hooks' },
    { id: '3', title: 'Vacation Planning' },
  ]

  return (
    <div className="chat-layout">
      {/* Left Sidebar: Minimalist History */}
      <aside className="chat-history-sidebar">
        <div className="chat-history-header">
          <button className="new-chat-btn">
            <Plus size={16} />
            <span>New Chat</span>
          </button>
        </div>
        
        <div className="chat-history-list">
          {history.map((item) => (
            <div 
              key={item.id} 
              className={`chat-history-item ${item.id === '1' ? 'chat-history-item--active' : ''}`}
            >
              <div className="chat-history-item__title">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Right Area: Clean Conversation */}
      <main className="chat-main-area">
        <header className="chat-compact-header">
          <div className="chat-compact-header__model">
            {settings.model.split('/').pop()}
          </div>
        </header>

        <MessageList />
        <ChatInput />
      </main>
    </div>
  )
}
