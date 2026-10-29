"use client";

import { useActionState } from "react";
import { LogIn } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { login, type LoginState } from "../server/actions";

const initialState: LoginState = { error: null };

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <Card className="border-border/80 bg-card w-full p-8">
      <form action={formAction} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground/80 text-xs font-semibold uppercase">
            Email
          </Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-foreground/80 text-xs font-semibold uppercase">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
          />
        </div>

        {state.error && (
          <p role="alert" className="text-destructive text-xs">
            {state.error}
          </p>
        )}

        <Button type="submit" loading={pending} className="w-full">
          <LogIn className="size-4" aria-hidden="true" />
          <span>Masuk</span>
        </Button>
      </form>
    </Card>
  );
}
