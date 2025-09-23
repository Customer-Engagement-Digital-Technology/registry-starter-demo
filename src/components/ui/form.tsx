import * as React from "react";
import {
  Controller,
  FormProvider,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ ...props }: ControllerProps<TFieldValues, TName>) {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}

function useFormField() {
  const fieldContext = React.useContext(FormFieldContext);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  return fieldContext;
}

const FormItemContext = React.createContext<{ id: string } | null>(null);

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId();
  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={cn("grid gap-2", className)} {...props} />
    </FormItemContext.Provider>
  );
}

function useFormItem() {
  const context = React.useContext(FormItemContext);
  if (!context) {
    throw new Error("useFormItem should be used within <FormItem>");
  }
  return context;
}

function FormLabel({ className, ...props }: React.ComponentProps<"label">) {
  const { id } = useFormItem();
  return (
    <label className={cn("text-sm font-medium", className)} htmlFor={id} {...props} />
  );
}

function FormControl({ className, ...props }: React.ComponentProps<"div">) {
  const { id } = useFormItem();
  return (
    <div className={className} {...props} />
  );
}

function FormMessage({ className, children, ...props }: React.ComponentProps<"p">) {
  const body = children ?? null;
  if (!body) return null;
  return (
    <p className={cn("text-destructive text-sm", className)} {...props}>
      {body}
    </p>
  );
}

export { Form, FormItem, FormLabel, FormControl, FormMessage, FormField };


