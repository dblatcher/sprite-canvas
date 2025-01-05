import {loadImage, loadAssets} from '../index';


describe('index', () => {

  test('has expected exports', () => {
    expect(typeof loadImage).toBe('function');
    expect(typeof loadAssets).toBe('function');
  })
})
