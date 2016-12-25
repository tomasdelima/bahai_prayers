'use strict'

import React, {Component} from 'react'
import {StyleSheet, Dimensions} from 'react-native'

var windowHeight = Dimensions.get('window').height - 25
var windowWidth  = Dimensions.get('window').width

module.exports = StyleSheet.create({
  // General: simple
  empty:        { },
  row:          { flexDirection: 'row' },
  shrink:       { flex: -1 },
  static:       { flex: 0 },
  flex:         { flex: 1 },
  flex2:        { flex: 2 },
  center:       { alignSelf: 'center' },
  right:        { textAlign: 'right', right: 50 },
  top:          { top: 20 },
  padding:      { padding: 10 },
  paddingH:     { paddingHorizontal: 30 },
  paddingV:     { paddingVertical: 15 },
  paddingV3:    { paddingVertical: 45 },
  paddingDown:  { paddingBottom: 10 },
  marginH:      { marginHorizontal: 15 },
  marginV:      { marginVertical: 15 },
  rotate:       { transform: [{rotate: '-90deg'}] },
  justifyLeft:  { justifyContent: 'flex-start' },
  justifyRight: { justifyContent: 'flex-end' },
  justifyCenter:{ justifyContent: 'center' },
  alignCenter:  { alignItems: 'center' },
  translucid:   { opacity: 0.6 },
  red:          { backgroundColor: 'rgba(255, 0, 0, 0.2)' },
  blue:         { backgroundColor: 'rgba(0, 0, 255, 0.2)' },
  green:        { backgroundColor: 'rgba(0, 255, 0, 0.2)' },
  gray:         { backgroundColor: 'rgba(128, 128, 128, 0.2)' },
  white:        { backgroundColor: 'white' },
  high:         { height: windowHeight },
  wide:         { width: windowWidth },
  highInverted: { width: windowHeight },
  noFontFamily: { fontFamily: '' },

  // General: complex
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  item: {
    fontSize: 20,
    marginHorizontal: 30,
    fontFamily: 'timeless',
  },
  absolute: {
    position: 'absolute',
    height: windowHeight,
    width: windowWidth,
    top: 0,
    left: 0,
  },
  textAlignCenter: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  border: {
    borderColor: '#333',
    borderWidth: 1,
  },

  // Specific
  cardboard: {
    flex: 1,
    backgroundColor: '#eee',
  },
  card: {
    margin: 5,
    marginBottom: 0,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
  },
  gregorianMonthBar: {
    marginBottom: 3,
    height: 10,
  },
  searchInput: {
    fontSize: 30,
    height: 50
  },
  letterCount: {
    width: windowWidth - 200,
    backgroundColor: 'red',
  },
  scrollView: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  bottomButtonsContainer: {
    justifyContent: 'space-around',
  },
  counter: {
    fontSize: 150,
    fontFamily: 'ruritania',
  },
  watermark: {
    position: 'absolute',
    fontSize: windowWidth*0.4,
    fontFamily: 'ruritania',
    color: 'rgba(128, 128, 128, 0.25)',
  },
})

