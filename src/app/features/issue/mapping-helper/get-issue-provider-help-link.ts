import { IssueProviderKey } from '../issue.model';

export const getIssueProviderHelpLink = (
  issueProviderKey: IssueProviderKey,
): string | undefined => {
  switch (issueProviderKey) {
    case 'JIRA':
      return 'https://support.atlassian.com/jira-service-management-cloud/docs/use-advanced-search-with-jira-query-language-jql/';
    case 'GITHUB':
      return 'https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/filtering-and-searching-issues-and-pull-requests';
    case 'GITLAB':
      return 'https://docs.gitlab.com/ee/user/search/advanced_search.html';
    // case 'GITEA':
    // case 'CALDAV':
    // case 'REDMINE':
    // case 'OPEN_PROJECT':
  }
  return undefined;
};
