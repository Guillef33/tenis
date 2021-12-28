import {createClient} from 'contentful';

const getSingle = () => {

    const client = createClient({
      space: "zin0nqkssfct",
      accessToken: 'nv-yfjXp5-pckL7C7HCRFEJ1eOEEd2M_pRxzhiURJrQ',
      host: 'preview.contentful.com'
    });

client.getEntry("<entry_id>").then(function (entry) {
  // logs the entry metadata
  console.log(entry.sys);

  // logs the field with ID title
  console.log(entry.fields.title);
});
    return ( getSingle );



};

export default getSingle;;