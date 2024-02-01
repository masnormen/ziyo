import type { CSSProperties, ReactNode } from 'react';

const ReadingRow = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => (
  <div
    className="reading-row"
    style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '8px',
      fontFamily: 'Sora',
      ...style,
    }}
  >
    {children}
  </div>
);

const ReadingLabel = ({ label = '' }) => (
  <div
    style={{
      display: 'flex',
      color: 'rgb(74 48 3)',
      marginTop: '4px',
      width: '170px',
      fontSize: '32px',
    }}
  >
    {label}
  </div>
);

const ReadingChip = ({ reading = '', backgroundColor = '#FECDD3' }) => (
  <div
    style={{
      whiteSpace: 'nowrap',
      borderRadius: '100%',
      padding: '0.5rem 1rem',
      fontSize: '24px',
      fontWeight: '500',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      transition: 'background-color 0.3s, color 0.3s',
      backgroundColor,
      color: '#1F2937',
    }}
  >
    {reading}
  </div>
);

export const IndexOpenGraphImage = () => (
  <div
    style={{
      display: 'flex',
      position: 'relative',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Noto Sans JP',
      backgroundColor: '#faf7f4',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='112' height='56'%3E%3Cpath fill='%23face83' fill-opacity='0.3' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E")`,
    }}
  >
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '38%',
        transform: 'translateX(-50%) translateY(-55%)',
        zIndex: -10,
        margin: 'auto',
        height: '300px',
        width: '600px',
        borderRadius: '100%',
        backgroundColor: '#DD8F09',
        opacity: '0.4',
        filter: 'blur(80px)',
      }}
    />

    <div
      style={{
        display: 'flex',
        fontFamily: 'Noto Sans JP',
        fontWeight: 'bold',
        fontSize: '152px',
        color: 'rgb(74 48 3)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      ジヨ
      <span
        style={{
          fontFamily: 'Sora',
          fontWeight: 'bold',
          fontSize: '81px',
          color: 'rgb(74 48 3)',
          marginLeft: '24px',
        }}
      >
        ziyo
      </span>
    </div>
    <div
      style={{
        display: 'flex',
        fontSize: '32px',
        fontWeight: '700',
        fontFamily: 'Sora',
        color: 'rgb(74 48 3)',
        transform: 'translateY(24px)',
      }}
    >
      a stupidly simple Kanji dictionary :)
    </div>
    <ReadingRow
      style={{
        fontWeight: 'normal',
        fontSize: '32px',
        marginTop: '64px',
        color: '#915c27',
      }}
    >
      ziyo.nourman.com
    </ReadingRow>
  </div>
);

/**
 * `charData` is a string of the form: `${kanji}::${onyomi}::${kunyomi}::${meanings}`
 * where each field is separated by `::` and each field is a string of comma-separated values
 */
export const KanjiOpenGraphImage = ({
  charData,
}: {
  charData: `${string}::${string}::${string}::${string}`;
}) => {
  const [[kanji], onyomi, kunyomi, meanings] = charData
    .split('::')
    .map((field) => field.split(','));

  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: '24px 150px',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: 'Noto Sans JP',
        backgroundColor: '#faf7f4',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='112' height='56'%3E%3Cpath fill='%23face83' fill-opacity='0.3' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E")`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '240px',
          top: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
          zIndex: -10,
          margin: 'auto',
          height: '200px',
          width: '300px',
          borderRadius: '100%',
          backgroundColor: '#DD8F09',
          opacity: '0.4',
          filter: 'blur(80px)',
        }}
      />

      <div
        style={{
          display: 'flex',
          fontFamily: 'Noto Sans JP',
          fontWeight: 'bold',
          fontSize: '200px',
          color: 'rgb(74 48 3)',
          width: '100%',
          alignItems: 'center',
        }}
      >
        {kanji}

        <div
          className="readings"
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Noto Sans JP',
            fontWeight: 'bold',
            marginLeft: '120px',
            fontSize: '152px',
            gap: '24px',
            color: 'rgb(74 48 3)',
            justifyContent: 'center',
          }}
        >
          {onyomi.length > 0 && (
            <ReadingRow>
              <ReadingLabel label="Onyomi" />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: '8px',
                  width: '500px',
                }}
              >
                {onyomi.map((r) => (
                  <ReadingChip
                    key={r}
                    reading={r}
                    backgroundColor="rgb(255 228 230)"
                  />
                ))}
              </div>
            </ReadingRow>
          )}

          {kunyomi.length > 0 && (
            <ReadingRow>
              <ReadingLabel label="Kunyomi" />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: '8px',
                  width: '500px',
                }}
              >
                {kunyomi.map((r) => (
                  <ReadingChip
                    key={r}
                    reading={r}
                    backgroundColor="rgb(253 236 206)"
                  />
                ))}
              </div>
            </ReadingRow>
          )}

          {meanings.length > 0 && (
            <ReadingRow
              style={{
                paddingRight: '150px',
                fontSize: '32px',
              }}
            >
              {meanings.join(' · ')}
            </ReadingRow>
          )}

          <ReadingRow
            style={{
              paddingRight: '150px',
              fontWeight: 'normal',
              fontSize: '32px',
              color: '#915c27',
            }}
          >
            ziyo.nourman.com/kanji/{kanji}
          </ReadingRow>
        </div>
      </div>
    </div>
  );
};
