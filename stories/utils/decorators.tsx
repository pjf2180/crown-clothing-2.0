export const StoryFrameDecorator = (storyFn: () => React.ReactNode) => {
    return (<div style={{border: '1px dashed #ccc' }} >
        {storyFn()}
    </div>)
}

export function StoryFontDecorator() {
    return (storyFn: () => React.ReactNode) => {
      return <div className="app-font">{storyFn()}</div>;
    };
  }
  