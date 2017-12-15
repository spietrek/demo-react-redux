const FUSE_OPTIONS = {
  shouldSort: true,
  threhold: 2.0,
  location: 0,
  distace: 100,
  maxPatternLength: 32,
  minMatchCharLength: 2,
  keys: ['planNumber', 'planName'],
};

export default FUSE_OPTIONS;
