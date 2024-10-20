import React from 'react'
// import JobsList from '@/components/JobsList';
// import SearchForm from '@/components/SearchForm';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
// import { getAllJobsAction } from '@/utils/actions';

const AllJobsPage = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['jobs', '', 'all', 1],
        // queryFn: () => getAllJobsAction({}),
      });

  return (
    <div>AllJobsPage</div>
    // <HydrationBoundary state={dehydrate(queryClient)}>
    //   {/* <SearchForm />
    //   <JobsList /> */}
    // </HydrationBoundary>
  )
}

export default AllJobsPage