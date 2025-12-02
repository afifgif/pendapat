'use client'

import { useState } from 'react'
import { Typography } from '@/components/Typography'
import { colors } from '@/tokens'
import { icons } from '@/assets/assets'

export function ArticlePagination() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '40px 0'
    }}>
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          padding: '10px 16px',
          borderRadius: '10px',
          border: `1px solid ${colors.neutral[200]}`,
          backgroundColor: currentPage === 1 ? colors.neutral[100] : 'white',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          opacity: currentPage === 1 ? 0.5 : 1
        }}
      >
        <img 
          src={icons.arrowRight} 
          alt="Previous"
          style={{
            width: '16px',
            height: '16px',
            transform: 'rotate(180deg)',
            objectFit: 'contain'
          }}
        />
        <Typography 
          variant="paragraph-small-regular"
          style={{
            color: currentPage === 1 ? colors.neutral[400] : colors.neutral[600],
            fontFamily: 'Euclid Circular A',
            fontSize: '14px'
          }}
        >
          Sebelum
        </Typography>
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          style={{
            padding: '10px 16px',
            borderRadius: '10px',
            border: `1px solid ${currentPage === page ? colors.secondary[500] : colors.neutral[200]}`,
            backgroundColor: currentPage === page ? colors.secondary[500] : 'white',
            cursor: 'pointer',
            minWidth: '44px'
          }}
        >
          <Typography 
            variant="paragraph-small-regular"
            style={{
              color: currentPage === page ? 'white' : colors.neutral[600],
              fontFamily: 'Euclid Circular A',
              fontSize: '14px',
              fontWeight: currentPage === page ? 600 : 400
            }}
          >
            {page}
          </Typography>
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          padding: '10px 16px',
          borderRadius: '10px',
          border: `1px solid ${colors.neutral[200]}`,
          backgroundColor: currentPage === totalPages ? colors.neutral[100] : 'white',
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          opacity: currentPage === totalPages ? 0.5 : 1
        }}
      >
        <Typography 
          variant="paragraph-small-regular"
          style={{
            color: currentPage === totalPages ? colors.neutral[400] : colors.neutral[600],
            fontFamily: 'Euclid Circular A',
            fontSize: '14px'
          }}
        >
          Seterusnya
        </Typography>
        <img 
          src={icons.arrowRight} 
          alt="Next"
          style={{
            width: '16px',
            height: '16px',
            objectFit: 'contain'
          }}
        />
      </button>
    </div>
  )
}


