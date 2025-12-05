export const FAQItem = ({ question, answer, defaultOpen = false }) => {
  return (
    <details style={{
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      marginBottom: '1rem',
      overflow: 'hidden',
    }} open={defaultOpen}>
      <summary style={{
        padding: '1rem 1.5rem',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: '600',
        color: '#111827',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        transition: 'background-color 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#f3f4f6'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#ffffff'
      }}>
        <span>{question}</span>
        <span style={{
          fontSize: '1.5rem',
          color: '#6b7280',
          transition: 'transform 0.2s',
        }}>
          ▼
        </span>
      </summary>
      <div style={{
        padding: '1.5rem',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e5e7eb',
        color: '#4b5563',
        lineHeight: '1.6',
      }}>
        {typeof answer === 'string' ? <p style={{ margin: 0 }}>{answer}</p> : answer}
      </div>
    </details>
  )
}

