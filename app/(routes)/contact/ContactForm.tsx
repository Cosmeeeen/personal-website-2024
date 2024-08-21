'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import axios from 'axios';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader } from 'react-feather';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(200, { message: 'Name is too long' }),
  email: z.string().email().max(200, { message: 'Email is too long' }),
  message: z
    .string()
    .min(10, {
      message:
        'I think you should write more than that if you want to send me an email',
    })
    .max(1000, { message: 'Message is too long' }),
});

const ContactForm = () => {
  // This is a workaround for extensions messing with hydration
  // It's stupid that I have to do this, but it's the only way to make it work
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const resp = await axios.post('/api/email', values);
      form.reset();
      toast({
        title: 'Email sent',
        description:
          'Thank you! I will get back to you as soon as possible. :)',
      });
      return resp;
    } catch (err) {
      toast({
        title: 'Failed to send email',
        description: 'Please try again later or send an email manually',
        variant: 'destructive',
        action: (
          <ToastAction
            altText='Open mailing app'
            onClick={() => {
              window.open('mailto:contact@cosmin.zip', '_blank');
            }}
          >
            Send Manually
          </ToastAction>
        ),
      });
    }
  };

  if (!isClient) {
    return (
      <div className='flex w-full items-center justify-center'>
        <Loader className='h-12 w-12 animate-spin' />
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-3 md:flex-row'
      >
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='md:w-1/2'>
              <FormControl>
                <Textarea
                  placeholder='Your message here...'
                  className='h-full resize-none'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex flex-col gap-3 md:w-1/2'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='John Doe' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='john.doe@test.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {form.formState.isSubmitting ? (
            <Button disabled className='w-full'>
              <Loader className='mr-2 h-4 w-4 animate-spin' />
              Loading
            </Button>
          ) : (
            <Button
              disabled={!form.formState.isValid}
              type='submit'
              className='w-full'
            >
              Send
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
