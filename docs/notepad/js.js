function buildInitialSharedState(props) {
  const bookmarks = [...props.config.data.bookmarks];
  const tags = [...props.config.data.tags];
  const settings = props.config.data.settings;
  const buildStateDispatch = props.config.shared.sharedConfigDispatch;

  buildStateDispatch([bookmarks, tags, settings])
}
