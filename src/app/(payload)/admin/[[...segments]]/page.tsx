/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type { Metadata } from 'next'

import config from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'
import { Suspense } from 'react';

interface Args {
  params: Promise<{
    segments: string[];
  }>;
  searchParams: Promise<Record<string, string | string[]>>;
}

export const generateMetadata = async (props: Args): Promise<Metadata> => {
  return generatePageMetadata({
    config,
    params: props.params,
    searchParams: props.searchParams,
  });
};

const Page = async (props: Args) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RootPage
        config={config}
        params={props.params}
        searchParams={props.searchParams}
        importMap={importMap}
      />
    </Suspense>
  );
};

export default Page;

