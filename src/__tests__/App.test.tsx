import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';

import { store } from '../renderer/store';
import App from '../renderer/containers/App';
import Parser from '../renderer/plugins/Parser';
import Button from '../renderer/components/Button';
import TwitchParser from '../renderer/plugins/TwitchParser';
import YoutubeParser from '../renderer/plugins/YoutubeParser';
import FacebookParser from '../renderer/plugins/FacebookParser';
import DailymotionParser from '../renderer/plugins/DailymotionParser';

describe('App', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('should render', () => {
    const hasRendered = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(hasRendered).toBeTruthy();
  });

  it('shows input field', () => {
    const input = screen.getByTestId('video-input-field');
    expect(input).toHaveValue('');
  });

  it('responds to `Open` button', () => {
    // Set video url in input field
    const value = 'https://www.youtube.com/watch?v=kN1Czs0m1SU';
    const input: HTMLInputElement = screen.getByTestId('video-input-field');
    input.value = value;

    expect(input).toHaveValue(value);

    screen.getByText('Open Video').click();

    input.value = '';
    expect(input).toHaveValue('');

    // Test if button reacts to clicks
    const clickListener = jest.fn(() => true);
    render(<Button label="TEST" onClick={clickListener} />);
    fireEvent.click(screen.getByText('TEST'));
    expect(clickListener).toBeCalled();
  });

  it('opens help section', () => {
    screen.getByTestId('help-tab').click();
    expect(screen.getByTestId('help')).toBeTruthy();
    expect(screen.queryByTestId('/video/i')).toBeFalsy();
    expect(screen.queryByTestId('/about/i')).toBeFalsy();
  });

  it('opens about section', () => {
    screen.getByTestId('about-tab').click();
    expect(screen.getByTestId('about')).toBeTruthy();
    expect(screen.queryByTestId('/video/i')).toBeFalsy();
    expect(screen.queryByTestId('/help/i')).toBeFalsy();
  });

  it('opens video section', () => {
    screen.getByTestId('video-tab').click();
    expect(screen.getByTestId('video')).toBeTruthy();
    expect(screen.queryByTestId('/about/i')).toBeFalsy();
    expect(screen.queryByTestId('/help/i')).toBeFalsy();
  });
});

describe('parsers', () => {
  describe('all parsers', () => {
    it('accepts link', () => {
      const parsed = new Parser().parse(
        'https://www.youtube.com/watch?v=SetziJyL8Yg&list=PLYxzS__5yYQmocPoLUiEAfD1cJNjhdQar',
        '720'
      );
      expect(parsed).toEqual(
        'https://youtube.com/embed/videoseries?list=PLYxzS__5yYQmocPoLUiEAfD1cJNjhdQar'
      );
    });

    it('denies link', () => {
      expect(new Parser().parse('', '')).toBe(null);
    });
  });

  describe('youtube', () => {
    it('accepts long link', () => {
      const parsed = new YoutubeParser().parse(
        'https://www.youtube.com/watch?v=2RxHQoiDctI',
        '720'
      );
      expect(parsed).toEqual('https://youtube.com/embed/2RxHQoiDctI?vq=hd720');
    });

    it('accepts short link', () => {
      const parsed = new YoutubeParser().parse(
        'https://youtu.be/2RxHQoiDctI',
        '720'
      );
      expect(parsed).toEqual('https://youtube.com/embed/2RxHQoiDctI?vq=hd720');
    });

    it('creates timestamp link', () => {
      const parsed = new YoutubeParser().parse(
        'https://youtu.be/2RxHQoiDctI?t=10',
        '720'
      );
      expect(parsed).toEqual(
        'https://youtube.com/embed/2RxHQoiDctI?vq=hd720&start=10'
      );
    });

    it('accepts playlist link', () => {
      const parsed = new YoutubeParser().parse(
        'https://www.youtube.com/watch?v=SetziJyL8Yg&list=PLYxzS__5yYQmocPoLUiEAfD1cJNjhdQar',
        ''
      );
      expect(parsed).toEqual(
        'https://youtube.com/embed/videoseries?list=PLYxzS__5yYQmocPoLUiEAfD1cJNjhdQar'
      );
    });

    it('denies corrupted link', () => {
      expect(
        new YoutubeParser().parse('https://www.yue.com/watch?v=2RxHQoiDctI', '')
      ).toBe(null);
    });
  });

  describe('dailymotion', () => {
    it('accepts link', () => {
      const parsed = new DailymotionParser().parse(
        'https://www.dailymotion.com/video/x209qoh',
        '720'
      );
      expect(parsed).toEqual(
        'https://dailymotion.com/embed/video/x209qoh?quality=720'
      );
    });

    it('denies link', () => {
      expect(new DailymotionParser().parse('', '')).toBe(null);
    });
  });

  describe('facebook', () => {
    it('accepts link', () => {
      const parsed = new FacebookParser().parse(
        'https://www.facebook.com/facebook/videos/10153231379946729/',
        '720'
      );
      expect(parsed).toEqual(
        'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F'
      );
    });

    it('denies link', () => {
      expect(new FacebookParser().parse('', '')).toBe(null);
    });
  });

  describe('twitch', () => {
    it('accepts link', () => {
      const parsed = new TwitchParser().parse(
        'https://twitch.tv/dhalucard',
        '720'
      );
      expect(parsed).toEqual(
        'https://player.twitch.tv/?channel=dhalucard&quality=high'
      );
    });

    it('denies link', () => {
      expect(new TwitchParser().parse('https://twitch.t/dhalucard', '')).toBe(
        null
      );
    });
  });
});
