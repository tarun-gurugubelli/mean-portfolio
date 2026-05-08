import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { LucideAngularModule } from 'lucide-angular';
import {
  Sun, Moon, Download, Code2, BriefcaseBusiness, ExternalLink,
  Mail, Phone, MapPin, Award, Users, Zap, Server, GraduationCap,
  Building, Calendar, Menu, X, Quote, Star, ChevronLeft, ChevronRight,
  CheckCircle, AlertCircle, Loader2, Globe, Database, BookOpen,
} from 'lucide-angular';

const icons = {
  Sun, Moon, Download, Code2, BriefcaseBusiness, ExternalLink,
  Mail, Phone, MapPin, Award, Users, Zap, Server, GraduationCap,
  Building, Calendar, Menu, X, Quote, Star, ChevronLeft, ChevronRight,
  CheckCircle, AlertCircle, Loader2, Globe, Database, BookOpen,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick(icons)),
  ],
};
