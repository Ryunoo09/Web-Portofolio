"use client";

import { useActionState } from "react";
import { Loader2, LogIn } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { login, type LoginState } from "../server/actions";

const initialState: LoginState = { error: null };

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <Card className="card-luxury border-border/80 bg-card w-full p-8">
      <form action={formAction} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground/80 text-xs font-semibold uppercase">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="bg-background/50 border-border/80 focus-visible:border-gold/60"
          />
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
            className="bg-background/50 border-border/80 focus-visible:border-gold/60"
          />
        </div>

        {state.error && (
          <p role="alert" className="text-xs text-red-500">
            {state.error}
          </p>
        )}

        <Button
          type="submit"
          disabled={pending}
          className="bg-gold text-primary-foreground hover:bg-gold/90 w-full rounded-full font-semibold"
        >
          {pending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              <span>Memproses...</span>
            </>
          ) : (
            <>
              <LogIn className="size-4" />
              <span>Masuk</span>
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}
