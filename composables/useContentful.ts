import { createClient } from 'contentful';
import type { ContentfulClientApi } from 'contentful';

interface ContentfulConfig {
  space: string;
  accessToken: string;
}

const useContentful = () => {
  const runtimeConfig = useRuntimeConfig();
  const space = runtimeConfig.public.contentfulSpaceId;
  const accessToken = runtimeConfig.public.contentfulToken;
  if (!space || !accessToken) {
    throw new Error(
      'CONTENTFUL_SPACE_ID and CONTENTFUL_TOKEN environment variables must be defined'
    );
  }

  const config: ContentfulConfig = {
    space,
    accessToken,
  };

  const client: ContentfulClientApi<any> = createClient(config);

  return {
    client,
  };
};

export default useContentful;