import { Observable } from '@nativescript/core';

interface ValidationRule {
    validate: (value: any) => boolean;
    message: string;
}

export class FormValidator extends Observable {
    private rules: Map<string, ValidationRule[]> = new Map();
    private errors: Map<string, string[]> = new Map();

    addRule(field: string, rule: ValidationRule) {
        if (!this.rules.has(field)) {
            this.rules.set(field, []);
        }
        this.rules.get(field)?.push(rule);
    }

    validate(field: string, value: any): boolean {
        const fieldRules = this.rules.get(field) || [];
        const fieldErrors: string[] = [];

        fieldRules.forEach(rule => {
            if (!rule.validate(value)) {
                fieldErrors.push(rule.message);
            }
        });

        this.errors.set(field, fieldErrors);
        this.notifyPropertyChange(`${field}_errors`, fieldErrors);

        return fieldErrors.length === 0;
    }

    validateAll(values: Record<string, any>): boolean {
        let isValid = true;
        Object.entries(values).forEach(([field, value]) => {
            if (!this.validate(field, value)) {
                isValid = false;
            }
        });
        return isValid;
    }

    getErrors(field: string): string[] {
        return this.errors.get(field) || [];
    }

    clearErrors(field?: string) {
        if (field) {
            this.errors.delete(field);
            this.notifyPropertyChange(`${field}_errors`, []);
        } else {
            this.errors.clear();
            this.rules.forEach((_, field) => {
                this.notifyPropertyChange(`${field}_errors`, []);
            });
        }
    }
}