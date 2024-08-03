import ImageDisplayer from '../lib/main';

function App() {
  return (
    <>
      <div style={{ width: '50vw', margin: 'auto' }}>
        <ImageDisplayer
          delay={1000}
          spinner={{
            spinnerType: 'BarLoader',
            color: 'red',
            wrapperHeight: '10vw',
          }}
          url="https://upload.wikimedia.org/wikipedia/commons/e/ea/Sydney_Harbour_Bridge_night.jpg"
        />
        <ImageDisplayer
          delay={2000}
          spinner={{
            spinnerType: 'ClipLoader',
            color: 'green',
            size: '7vw',
            wrapperHeight: '10vw',
          }}
          url="https://upload.wikimedia.org/wikipedia/commons/0/01/Grand_Canyon_Powell_Point_Evening_Light_02_2013.jpg"
        />
        <ImageDisplayer
          delay={3000}
          url="https://i.giphy.com/l1J9Mo0YUEzM8zIha.webp"
          spinner={{
            wrapperHeight: '10vw',
          }}
        />
        <ImageDisplayer
          spinner={{
            spinnerType: 'PacmanLoader',
            color: 'purple',
            wrapperHeight: '10vw',
          }}
          url="asdasd-onpurposebrokenimage!!!"
          consoleError
          onError={() => alert('Image could not be loaded!!!')}
        />
      </div>
    </>
  );
}

export default App;
