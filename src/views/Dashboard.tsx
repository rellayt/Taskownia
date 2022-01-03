import React, { ChangeEvent } from 'react';
import { useProjects } from '../hooks/useProjects';
import useAsyncEffectOnce from '../helpers/use-async-effect-once';
import FeatureBaseTemplate from '../components/templates/FeatureBaseTemplate/FeatureBaseTemplate';
import ProjectList from '../components/organisms/ProjectList/ProjectList';
import { Header, StyledPagination, Wrapper } from './Dashboard.styles';
import SortButton from '../components/atoms/SortButton/SortButton';

const Dashboard = () => {
	const { filteredProjects: projects, totalPages, filter, currentPage, facade } = useProjects();

	useAsyncEffectOnce(async () => {
		facade.getProjects().then();
	});

	const handlePageChange = (e: ChangeEvent<unknown>, page: number) => facade.updateCurrentPage(page);

	return (
		<FeatureBaseTemplate headerContent={'Panel'}>
			<Wrapper>
				<Header>
					Zlecenia
					{filter && <SortButton content={'Sortuj według'} filter={filter} onFilterChange={(filter) => facade.updateFilter(filter)} />}
				</Header>
				{projects && <ProjectList projects={projects} />}
				<StyledPagination count={totalPages} page={currentPage} onChange={handlePageChange} variant="outlined" shape="rounded" />
			</Wrapper>
		</FeatureBaseTemplate>
	);
};

export default Dashboard;
