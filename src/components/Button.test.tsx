
import { render, waitFor } from '@testing-library/react';
import { describe, it } from 'vitest';
import Button from './Button';

describe('Button', () => {
    it('renders title', async () => {
        const { getByText } = render(<Button title="Title" onClick={() => null} />);
        await waitFor(() => getByText('Title'))
    })
})