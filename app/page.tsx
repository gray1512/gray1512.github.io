import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, ExternalLink } from "lucide-react";
import { SkillsStaggered } from "./ui/SkillsStaggered";
import { CONTACTS, EMAIL, GITHUB, INTRO, LOCATION, NAME, TITLE } from "./lib/definitions";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-10">
            <h1 className="mb-2 tracking-tight">{NAME}</h1>
            <p className="text-foreground/90 mb-4">
              {TITLE} @ {LOCATION}
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {INTRO}
            </p>
        </div>

        {/* Skills Section */}
        <Card className="mb-8 shadow-sm">
          <CardContent className="p-8">
            <h2 className="mb-4">Skills & Technologies</h2>
            <SkillsStaggered />
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="shadow-sm">
          <CardContent className="p-8">
            <h2 className="mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I&apos;m always interested in new opportunities and collaborations.<br/>Feel free to reach out!
            </p>

            <div className="space-y-4">
              {CONTACTS.map((contact) => {
                const Icon = contact.icon;
                return (
                  <div key={contact.label} className="flex items-center justify-between group py-1">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <Icon className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="font-medium truncate">{contact.value}</p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity min-h-9 min-w-9 flex-shrink-0"
                      asChild
                    >
                      <a href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                );
              })}
            </div>

            <Separator className="my-6" />
 
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="w-full sm:flex-1 h-11" asChild>
                
                <a href={`mailto:${EMAIL}`} className="flex items-center justify-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" className="w-full sm:flex-1 h-11" asChild>
                <a href={`${GITHUB}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Github className="mr-2 h-4 w-4" />
                  View Projects
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Built with React & Next.js.
          </p>
        </div>
      </div>
    </main>
  );
}