import React from 'react'

export type Direction = 'left' | 'right' | 'up' | 'down'
export type SwipeHandler = (direction: Direction) => void
export type CardLeftScreenHandler = (direction: Direction) => void

export interface SwipeAPI {
  /**
   * Programmatically trigger a swipe of the card in one of the valid directions `'left'`, `'right'`, `'up'` and `'down'`. This function, `swipe`, can be called on a reference of the TinderCard instance. Check the [example](https://github.com/3DJakob/react-tinder-card-demo/blob/master/src/examples/Advanced.js) code for more details on how to use this.
   *
   * @param dir The direction in which the card should be swiped. One of: `'left'`, `'right'`, `'up'` and `'down'`.
   */
  swipe(dir?: Direction): Promise<void>
}

export interface TinderCardProps {
  ref?: React.Ref<SwipeAPI>

  /**
   * Whether or not to let the element be flicked away off-screen after a swipe.
   *
   * @default true
   */
  flickOnSwipe?: boolean

  /**
   * Callback that will be executed when a swipe has been completed. It will be called with a single string denoting which direction the swipe was in: `'left'`, `'right'`, `'up'` or `'down'`.
   */
  onSwipe?: SwipeHandler

  /**
   * Callback that will be executed when a `TinderCard` has left the screen. It will be called with a single string denoting which direction the swipe was in: `'left'`, `'right'`, `'up'` or `'down'`.
   */
  onCardLeftScreen?: CardLeftScreenHandler

  /**
   * An array of directions for which to prevent swiping out of screen. Valid arguments are `'left'`, `'right'`, `'up'` and `'down'`.
   *
   * @default []
   */
  preventSwipe?: Direction[]

  /**
   * HTML attribute class
   */
  className?: string
}

declare const TinderCard: React.FC<TinderCardProps>

export = TinderCard
