export const CardGrid = ({ cards, cols = 3 }) => {
  const gridCols = 'repeat(' + (cols || 3) + ', 1fr)';
  
  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: gridCols,
        gap: '1.5rem',
        marginTop: '2rem',
        marginBottom: '2rem',
      }}
    >
      {cards && cards.map && cards.map((card) => (
        <a
          key={card.href || card.title}
          href={card.href}
          style={{
            display: 'block',
            padding: '1.5rem',
            border: '1px solid #e5e7eb',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            color: 'inherit',
            backgroundColor: '#ffffff',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#0c3b43'
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e5e7eb'
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <h3 style={{
            margin: '0 0 0.5rem 0',
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#0c3b43',
          }}>
            {card.title}
          </h3>
          {card.description && (
            <p style={{
              margin: '0',
              fontSize: '0.875rem',
              color: '#6b7280',
              lineHeight: '1.5',
            }}>
              {card.description}
            </p>
          )}
        </a>
      ))}
    </div>
  )
}

