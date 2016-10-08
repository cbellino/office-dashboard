import React, { PropTypes } from 'react';
import Section from '../components/Section';
import List from '../components/List';
import ListItem from '../components/ListItem';
import Strip from '../components/Strip';
// import { Preview } from './preview';

const renderItem = (preview) => {
  const status = (preview.status !== 'free') ? 'busy' : 'free';
  const stripVariant = (status === 'busy') ? 'error' : 'success';
  const url = preview.url;
  const item = {
    key: preview.key,
    title: <a target={'_blank'} href={url}>{preview.name}</a>,
    content: <a target={'_blank'} href={url}>{preview.comment}</a>,
  };

  return (
    <ListItem
      key={item.key}
      item={item}
      strip={<Strip variant={stripVariant}>{status}</Strip>}
      actions={[
        <span key={'clear'}>Clear</span>,
        <span key={'edit'}>Edit</span>,
      ]}
    />
  );
};

function PreviewSection(props) {
  const { previews } = props;

  return (
    <Section title={'Previews'}>
      <List items={previews} renderItem={renderItem} />
    </Section>
  );
}

PreviewSection.propTypes = {
  previews: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    requested_by: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
};

export default PreviewSection;
