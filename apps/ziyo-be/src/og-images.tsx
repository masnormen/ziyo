export const IndexOpenGraphImage = () => (
  <div
    style={{
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      padding: '108px 32px',
      width: '100%',
      height: '100%',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      fontFamily: 'Noto Sans JP',
      backgroundColor: '#e5e5f7',
      backgroundImage:
        'linear-gradient(to right, #8080800a 1px, transparent 1px), linear-gradient(to bottom, #8080800a 1px, transparent 1px)',
      backgroundSize: '14px 24px',
      color: '#003023',
    }}
  >
    <div
      style={{
        position: 'absolute',
        left: '120px',
        right: 0,
        top: '24px',
        zIndex: -10,
        margin: 'auto',
        height: '500px',
        width: '600px',
        borderRadius: '50%',
        backgroundColor: 'rgb(232 121 249/1)',
        opacity: '0.33',
        filter: 'blur(100px)',
      }}
    />

    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '12px',
        gap: 0,
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '64px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontWeight: 'bold',
            fontSize: '220px',
            letterSpacing: '-0.1em',
            fontFamily: 'Noto Sans JP',
            backgroundClip: 'text',
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: '1',
            color: 'transparent',
            backgroundImage: 'linear-gradient(to top right, #1a1e15, #262b39)',
          }}
        >
          ジヨ
        </div>

        <div
          style={{
            display: 'flex',
            fontWeight: 'bold',
            fontSize: '132px',
            lineHeight: '1',
            fontFamily: 'Noto Sans JP',
            backgroundClip: 'text',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'transparent',
            backgroundImage: 'linear-gradient(to top right, #293258, #53596b)',
          }}
        >
          Ziyo
        </div>
      </div>
      <div
        style={{
          fontSize: '36px',
          fontWeight: 'bold',
          fontFamily: 'Noto Sans JP',
          backgroundClip: 'text',
          justifyContent: 'center',
          lineHeight: '1',
          color: 'transparent',
          backgroundImage: 'linear-gradient(to top left, #182b39, #665448)',
        }}
      >
        a stupidly simple Kanji dictionary
      </div>
    </div>
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: '32px',
          fontWeight: '700',
          fontFamily: 'Noto Sans JP',
        }}
      >
        &gt; ziyo.nourman.com
      </div>
    </div>
  </div>
);

export const KanjiOpenGraphImage = ({ kanji }: { kanji: string }) => (
  <div
    style={{
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      padding: '108px 32px',
      width: '100%',
      height: '100%',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      fontFamily: 'Noto Sans JP',
      backgroundColor: '#e5e5f7',
      backgroundImage:
        'linear-gradient(to right, #8080800a 1px, transparent 1px), linear-gradient(to bottom, #8080800a 1px, transparent 1px)',
      backgroundSize: '14px 24px',
      color: '#003023',
    }}
  >
    <div
      style={{
        position: 'absolute',
        left: '120px',
        right: 0,
        top: '24px',
        zIndex: '-10',
        margin: 'auto',
        height: '500px',
        width: '600px',
        borderRadius: '50%',
        backgroundColor: 'rgb(232 121 249/1)',
        opacity: '0.33',
        filter: 'blur(100px)',
      }}
    />

    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '12px',
        gap: 0,
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '64px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontWeight: 'bold',
            fontSize: '220px',
            letterSpacing: '-0.1em',
            fontFamily: 'Noto Sans JP',
            backgroundClip: 'text',
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: '1',
            color: 'transparent',
            backgroundImage: 'linear-gradient(to top right, #1a1e15, #262b39)',
          }}
        >
          {kanji}
        </div>

        <div
          style={{
            display: 'flex',
            fontWeight: 'bold',
            fontSize: '132px',
            lineHeight: '1',
            fontFamily: 'Noto Sans JP',
            backgroundClip: 'text',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'transparent',
            backgroundImage: 'linear-gradient(to top right, #293258, #53596b)',
          }}
        >
          Ziyo
        </div>
      </div>
      <div
        style={{
          fontSize: '36px',
          fontWeight: 'bold',
          fontFamily: 'Noto Sans JP',
          backgroundClip: 'text',
          justifyContent: 'center',
          lineHeight: '1',
          color: 'transparent',
          backgroundImage: 'linear-gradient(to top left, #182b39, #665448)',
        }}
      >
        a stupidly simple Kanji dictionary
      </div>
    </div>
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: '32px',
          fontWeight: '700',
          fontFamily: 'Noto Sans JP',
        }}
      >
        &gt; ziyo.nourman.com
      </div>
    </div>
  </div>
);
