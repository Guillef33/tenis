import {createClient} from 'contentful';

const useContentful = () => {

    const client = createClient({
      space: "zin0nqkssfct",
      accessToken: 'nv-yfjXp5-pckL7C7HCRFEJ1eOEEd2M_pRxzhiURJrQ',
      host: 'preview.contentful.com'
    });

    const getAuthors = async () => {
        try {
           const entries = await client.getEntries({
              content_type: "blogPost",
              select: "fields",
            });

            const sanitizedEntries = entries.items.map((item) => {
                const featuredImage = item.fields.featuredImage.fields;
                return {
                  ...item.fields,
                  featuredImage
                };
            });
            return sanitizedEntries;
        } catch (error) {
            console.log(`Error fetching blog posts: ${error}`);
        }
    };
    return ( getAuthors );



};

export default useContentful;;