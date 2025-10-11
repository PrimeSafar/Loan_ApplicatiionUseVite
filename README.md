# Loan_ApplicatiionUseVite
# Employee Form Component

A React form component for collecting employee information with real-time validation.

## Features

- **Form Fields**:
  - Full Name (min. 2 characters)
  - Phone Number (min. 11 digits)
  - Age (must be 18+)
  - Employment Status (checkbox)
  - Salary Range (dropdown)

- **Real-time Validation**:
  - Instant error messages
  - Dynamic submit button state
  - Field-specific validation rules

- **UI/UX**:
  - Responsive design
  - Clean, modern interface
  - Gradient background
  - Accessible form controls

## Validation Rules

| Field | Validation | Error Message |
|-------|------------|---------------|
| Name | ≥ 2 characters | "Name must be at least 2 characters" |
| Phone | ≥ 11 digits | "Phone must be at least 11 digits" |
| Age | ≥ 18 years | "Must be at least 18 years old" |
| Salary | Required | "Please select a salary" |

## Technologies Used

- React (with Hooks)
- Tailwind CSS
- HTML5 Form Validation

## Component Structure

```jsx
FormDash()
├── State Management (useState)
├── Validation Logic
├── Form UI
│   ├── Text Inputs (Name, Phone, Age)
│   ├── Checkbox (Employment Status)
│   ├── Dropdown (Salary)
│   └── Submit Button
└── Error Handling
```

## Usage

1. Fill in all required fields
2. Validation occurs as you type/select
3. Submit button enables when all validations pass
4. Error messages guide corrections

## Styling

- Responsive container with max-width
- Cyan color scheme
- Shadow and rounded corners
- Focus states for accessibility

The form provides immediate feedback and ensures data quality before submission.