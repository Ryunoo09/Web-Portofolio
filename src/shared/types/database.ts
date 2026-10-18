export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18";
  };
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          extensions?: Json;
          operationName?: string;
          query?: string;
          variables?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      admins: {
        Row: {
          created_at: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      certificates: {
        Row: {
          created_at: string;
          credential_url: string | null;
          id: string;
          image_url: string | null;
          is_published: boolean;
          issued_at: string | null;
          issuer: string;
          sort_order: number;
          title: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          credential_url?: string | null;
          id?: string;
          image_url?: string | null;
          is_published?: boolean;
          issued_at?: string | null;
          issuer: string;
          sort_order?: number;
          title: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          credential_url?: string | null;
          id?: string;
          image_url?: string | null;
          is_published?: boolean;
          issued_at?: string | null;
          issuer?: string;
          sort_order?: number;
          title?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      contact_messages: {
        Row: {
          created_at: string;
          email: string;
          id: string;
          is_read: boolean;
          message: string;
          name: string;
          subject: string | null;
        };
        Insert: {
          created_at?: string;
          email: string;
          id?: string;
          is_read?: boolean;
          message: string;
          name: string;
          subject?: string | null;
        };
        Update: {
          created_at?: string;
          email?: string;
          id?: string;
          is_read?: boolean;
          message?: string;
          name?: string;
          subject?: string | null;
        };
        Relationships: [];
      };
      education: {
        Row: {
          created_at: string;
          degree: string;
          description: string | null;
          ended_at: string | null;
          field: string | null;
          id: string;
          institution: string;
          is_published: boolean;
          sort_order: number;
          started_at: string | null;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          degree: string;
          description?: string | null;
          ended_at?: string | null;
          field?: string | null;
          id?: string;
          institution: string;
          is_published?: boolean;
          sort_order?: number;
          started_at?: string | null;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          degree?: string;
          description?: string | null;
          ended_at?: string | null;
          field?: string | null;
          id?: string;
          institution?: string;
          is_published?: boolean;
          sort_order?: number;
          started_at?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      experiences: {
        Row: {
          company: string;
          created_at: string;
          description: string | null;
          ended_at: string | null;
          id: string;
          is_published: boolean;
          location: string | null;
          role: string;
          sort_order: number;
          started_at: string;
          updated_at: string;
        };
        Insert: {
          company: string;
          created_at?: string;
          description?: string | null;
          ended_at?: string | null;
          id?: string;
          is_published?: boolean;
          location?: string | null;
          role: string;
          sort_order?: number;
          started_at: string;
          updated_at?: string;
        };
        Update: {
          company?: string;
          created_at?: string;
          description?: string | null;
          ended_at?: string | null;
          id?: string;
          is_published?: boolean;
          location?: string | null;
          role?: string;
          sort_order?: number;
          started_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      posts: {
        Row: {
          content_html: string | null;
          cover_image_alt: string | null;
          cover_image_url: string | null;
          created_at: string;
          excerpt: string;
          id: string;
          is_published: boolean;
          published_at: string | null;
          seo_description: string | null;
          seo_title: string | null;
          slug: string;
          tags: string[];
          title: string;
          updated_at: string;
        };
        Insert: {
          content_html?: string | null;
          cover_image_alt?: string | null;
          cover_image_url?: string | null;
          created_at?: string;
          excerpt: string;
          id?: string;
          is_published?: boolean;
          published_at?: string | null;
          seo_description?: string | null;
          seo_title?: string | null;
          slug: string;
          tags?: string[];
          title: string;
          updated_at?: string;
        };
        Update: {
          content_html?: string | null;
          cover_image_alt?: string | null;
          cover_image_url?: string | null;
          created_at?: string;
          excerpt?: string;
          id?: string;
          is_published?: boolean;
          published_at?: string | null;
          seo_description?: string | null;
          seo_title?: string | null;
          slug?: string;
          tags?: string[];
          title?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      profile: {
        Row: {
          avatar_url: string | null;
          bio: string | null;
          email: string | null;
          full_name: string;
          headline: string;
          id: number;
          location: string | null;
          resume_url: string | null;
          seo_description: string | null;
          seo_title: string | null;
          social_links: Json;
          updated_at: string;
        };
        Insert: {
          avatar_url?: string | null;
          bio?: string | null;
          email?: string | null;
          full_name: string;
          headline: string;
          id?: number;
          location?: string | null;
          resume_url?: string | null;
          seo_description?: string | null;
          seo_title?: string | null;
          social_links?: Json;
          updated_at?: string;
        };
        Update: {
          avatar_url?: string | null;
          bio?: string | null;
          email?: string | null;
          full_name?: string;
          headline?: string;
          id?: number;
          location?: string | null;
          resume_url?: string | null;
          seo_description?: string | null;
          seo_title?: string | null;
          social_links?: Json;
          updated_at?: string;
        };
        Relationships: [];
      };
      project_images: {
        Row: {
          alt: string;
          created_at: string;
          id: string;
          project_id: string;
          sort_order: number;
          url: string;
        };
        Insert: {
          alt: string;
          created_at?: string;
          id?: string;
          project_id: string;
          sort_order?: number;
          url: string;
        };
        Update: {
          alt?: string;
          created_at?: string;
          id?: string;
          project_id?: string;
          sort_order?: number;
          url?: string;
        };
        Relationships: [
          {
            foreignKeyName: "project_images_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
        ];
      };
      project_skills: {
        Row: {
          project_id: string;
          skill_id: string;
        };
        Insert: {
          project_id: string;
          skill_id: string;
        };
        Update: {
          project_id?: string;
          skill_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "project_skills_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "project_skills_skill_id_fkey";
            columns: ["skill_id"];
            isOneToOne: false;
            referencedRelation: "skills";
            referencedColumns: ["id"];
          },
        ];
      };
      projects: {
        Row: {
          challenges: string | null;
          cover_image_alt: string | null;
          cover_image_url: string | null;
          created_at: string;
          demo_url: string | null;
          description_html: string | null;
          ended_at: string | null;
          features: string[];
          id: string;
          is_deployed: boolean;
          is_featured: boolean;
          is_published: boolean;
          outcomes: string[];
          problem: string | null;
          project_type: string | null;
          repo_url: string | null;
          role: string | null;
          seo_description: string | null;
          seo_title: string | null;
          slug: string;
          solution: string | null;
          sort_order: number;
          started_at: string | null;
          summary: string;
          team_size: number | null;
          title: string;
          updated_at: string;
        };
        Insert: {
          challenges?: string | null;
          cover_image_alt?: string | null;
          cover_image_url?: string | null;
          created_at?: string;
          demo_url?: string | null;
          description_html?: string | null;
          ended_at?: string | null;
          features?: string[];
          id?: string;
          is_deployed?: boolean;
          is_featured?: boolean;
          is_published?: boolean;
          outcomes?: string[];
          problem?: string | null;
          project_type?: string | null;
          repo_url?: string | null;
          role?: string | null;
          seo_description?: string | null;
          seo_title?: string | null;
          slug: string;
          solution?: string | null;
          sort_order?: number;
          started_at?: string | null;
          summary: string;
          team_size?: number | null;
          title: string;
          updated_at?: string;
        };
        Update: {
          challenges?: string | null;
          cover_image_alt?: string | null;
          cover_image_url?: string | null;
          created_at?: string;
          demo_url?: string | null;
          description_html?: string | null;
          ended_at?: string | null;
          features?: string[];
          id?: string;
          is_deployed?: boolean;
          is_featured?: boolean;
          is_published?: boolean;
          outcomes?: string[];
          problem?: string | null;
          project_type?: string | null;
          repo_url?: string | null;
          role?: string | null;
          seo_description?: string | null;
          seo_title?: string | null;
          slug?: string;
          solution?: string | null;
          sort_order?: number;
          started_at?: string | null;
          summary?: string;
          team_size?: number | null;
          title?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      skills: {
        Row: {
          category: string;
          created_at: string;
          icon: string | null;
          id: string;
          is_published: boolean;
          level: number | null;
          name: string;
          sort_order: number;
          updated_at: string;
        };
        Insert: {
          category: string;
          created_at?: string;
          icon?: string | null;
          id?: string;
          is_published?: boolean;
          level?: number | null;
          name: string;
          sort_order?: number;
          updated_at?: string;
        };
        Update: {
          category?: string;
          created_at?: string;
          icon?: string | null;
          id?: string;
          is_published?: boolean;
          level?: number | null;
          name?: string;
          sort_order?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      is_admin: { Args: never; Returns: boolean };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    keyof DefaultSchema["Enums"] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    keyof DefaultSchema["CompositeTypes"] | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const;
