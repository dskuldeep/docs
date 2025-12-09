export const GlossaryCard = ({ term, definition, category, link, children }) => {
  // Use children if provided, otherwise fall back to definition prop for backward compatibility
  const content = children || definition;
  const isStringContent = typeof content === 'string';

  return (
    <div
      className="glossary-card"
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '0.5rem',
        padding: '1.5rem',
        marginBottom: '1rem',
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#0c3b43'
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#e5e7eb'
        e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '0.75rem',
      }}>
        <h3 style={{
          margin: '0',
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#0c3b43',
        }}>
          {term}
        </h3>
        {category && (
          <span style={{
            fontSize: '0.75rem',
            fontWeight: '500',
            color: '#6b7280',
            backgroundColor: '#f3f4f6',
            padding: '0.25rem 0.75rem',
            borderRadius: '0.375rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            {category}
          </span>
        )}
      </div>
      <div
        className={!isStringContent ? "glossary-mdx-content" : ""}
        style={{
          color: '#4b5563',
          lineHeight: '1.6',
          fontSize: '0.9375rem',
          whiteSpace: isStringContent ? 'pre-line' : undefined,
        }}>
        {content}
      </div>
      {link && link.href && (
        <div style={{ marginTop: '0.75rem' }}>
          <a
            href={link.href}
            style={{
              color: '#0c3b43',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '500',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = 'underline'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = 'none'
            }}
          >
            {link.text || 'Learn more'} →
          </a>
        </div>
      )}
    </div>
  )
}

