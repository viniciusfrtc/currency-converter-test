import { STRINGS } from '@/constants';
import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

const ErrorContainer = styled.div`
  padding: ${({ theme }) => theme.paddings.xl};
  text-align: center;
  color: ${({ theme }) => theme.colors.error};
`;

export class GlobalErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo) {}

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <h1>{STRINGS.ERROR_TITLE}</h1>
          <p>{STRINGS.ERROR_MESSAGE}</p>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}
